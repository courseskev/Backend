class Usuario {
    nombre = "";
    apellido = "";
    libros = [{
        book: "",
        author: ""
    }];
    mascotas = [""];

    constructor(name, lastname, books, pets) {
        this.nombre = name;
        this.apellido = lastname;
        this.libros = books;
        this.mascotas = pets;
    }

    getFullName() {
        return this.nombre + " " + this.apellido;
    }

    addMascota(pet) {
        this.mascotas.push(pet);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(book, author) {
        this.libros.push({
            book,
            author
        });
    }

    getBookNames() {
        return this.libros.map((book) => book.book);
    }
}

/*TESTING */

const user1 = new Usuario("Steve", "Jobs", [{
        book: "A Brief Histroy of the Universe",
        author: "Stephen Hawking"
    },
    {
        book: "El amor en los tiempos del colera",
        author: "Gabriel García Márquez"
    }
], ["lulu", "Oreo", "Hershey"]);

console.log("Nombre completo: ", user1.getFullName());
console.log("Añadinedo mascota", user1.addMascota("tokio"));
console.log("Mascota añadida con éxito", user1.mascotas);
console.log("Cantidad de mascotas: ", user1.countMascotas());
console.log("Añadinedo libro", user1.addBook("El arte de la intrusión", "Kevin Mitnick"));
console.log("Libro añadido con éxito", user1.getBookNames());