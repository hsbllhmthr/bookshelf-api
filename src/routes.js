const {createBooksHandler, getAllBooksHandler, getByIdBooksHandler, editBooksHandler, deleteBooksHandler } = require('./handler')
const routes = [
    {
        method:'GET',
        path:'/',
        handler: ()=>{
            return 'ini adalah halaman utama'
        }
    },
    {
        method : '*',
        path : '/',
        handler : () => {
            return 'halaman ini tidak dapat dibuka dengan menggunakan cara ini!'
        }
    },
    {
        method : 'POST',
        path : '/books',
        handler : createBooksHandler
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getByIdBooksHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksHandler
    }
]

module.exports = routes