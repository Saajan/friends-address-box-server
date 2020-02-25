import Sequelize from 'sequelize';
import config from '../config/config.json';

const env = process.env.NODE_ENV || 'development';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async () => {
    let maxReconnects = 20;
    let connected = false;

    console.log(config[env]);

    const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

    while (!connected && maxReconnects) {
        try {
            // eslint-disable-next-line no-await-in-loop
            await sequelize.authenticate();
            connected = true;
        } catch (err) {
            console.log('reconnecting in 5 seconds');
            // eslint-disable-next-line no-await-in-loop
            await sleep(5000);
            maxReconnects -= 1;
        }
    }

    if (!connected) {
        return null;
    }

    const models = {
        user: sequelize.import('./user'),
        address: sequelize.import('./address'),
    };

    Object.keys(models).forEach((modelName) => {
        if ('associate' in models[modelName]) {
            models[modelName].associate(models);
        }
    });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;
    models.op = Sequelize.Op;

    return models;
};