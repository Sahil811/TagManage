export const {
	HOST = 'http://localhost:3000/api/',
	// atlas configurations
	ATLAS_USER,
	ATLAS_PASSWORD,
	ATLAS_CLUSTER,
	PAGINATION_LIMIT = 30,
    MONGO_DB,
} = process.env;

const DB = process.env.MONGO_DB || 'tag-development';

export const mongoConnectionString = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@${ATLAS_CLUSTER}/${DB}?retryWrites=true`;