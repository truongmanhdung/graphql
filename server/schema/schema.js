const {gql} = require('apollo-server-express')

const typeDefs = gql`

    # QUERY
    type Book {
        id: ID,
        name: String,
        genre: String,
        author: Author
    }

    type Author {
        id: ID!,
        name: String,
        age: Int,
        books: [Book]
    }

    # ROOT TYPE : gốc của loại yêu cầu truy suất dữ liệu
    type Query {
        books: [Book],
        book (id: ID!): Book,
        authors: [Author],
        author (id: ID!): Author,
    }

    #MUTATION

    # TYPE: Thêm vào cơ sở dữ liệu
    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author,
        createBook(id: ID!, name: String, genre: String, authorId: ID!): Book,
    }
    
`

module.exports = typeDefs