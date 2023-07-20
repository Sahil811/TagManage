# Tag App

This is a Node.js app for managing tags. 

## Features

- CRUD operations for tags
- Tag filtering/searching
- User authentication
- RESTful API

## Usage

### Install

```
npm install
```

### Configure

Add MongoDB connection string and other environment variables to a `.env` file. See `.env.example`.

### Run

```
npm start
```

App will run on http://localhost:3000

## API

### Register User

```
POST /api/users
```

### Login 

```
POST /api/auth
```

### Tags

```
GET /api/tags
POST /api/tags
PUT /api/tags/:id
DELETE /api/tags/:id
```

## Built With

- [Express](https://expressjs.com/) - Web framework
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM 
- [Passport](http://www.passportjs.org/) - Authentication 

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Hat tip to anyone who's code was used
- Inspiration
- etc

Let me know if you would like me to modify or expand this README!
