import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name: 'Luis',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'Akira',
            email: 'user@example.com',
            password: bcrypt.hashSync('7777',8),
            isAdmin: false,
        }
    ]
    ,
    products: [
        {
            name: 'Genki I Textbook 3rd Edition',
            category: 'Study',
            image: '/images/P1.jpg',
            price: 1050,
            countInStock: 6,
            rating: 5,
            numReviews: 15,
            description: "Tercera edición del primer libro de aprendizaje de la lengua japonesa: Genki",
        },
        {
            name: 'Genki II Textbook 3rd Edition',
            category: 'Study',
            image: '/images/P2.jpg',
            price: 1050,
            countInStock: 8,
            rating: 4.5,
            numReviews: 10,
            description: "Tercera edición del segundo libro de aprendizaje de la lengua japonesa: Genki",
        },
        {
            name: 'Genki I Workbook 3rd Edition',
            category: 'Study',
            image: '/images/P3.jpg',
            price: 760,
            countInStock: 10,
            rating: 5,
            numReviews: 11,
            description: "Tercera edición del primer libro de practica de la lengua japonesa: Genki",
        },
        {
            name: 'Genki II Workbook 3rd Edition',
            category: 'Study',
            image: '/images/P4.jpg',
            price: 760,
            countInStock: 13,
            rating: 4.5,
            numReviews: 7,
            description: "Tercera edición del segundo libro de practica de la lengua japonesa: Genki",
        },
        {
            name: 'Basic Kanji Book I',
            category: 'Study',
            image: '/images/P5.jpg',
            price: 1150,
            countInStock: 4,
            rating: 4,
            numReviews: 18,
            description: "Primer libro de aprendizaje de caracteres japoneses conocidos como kanji",
        },
        {
            name: 'Basic Kanji Book II',
            category: 'Study',
            image: '/images/P6.jpg',
            price: 1150,
            countInStock: 7,
            rating: 4,
            numReviews: 8,
            description: "Segundo libro de aprendizaje de caracteres japoneses conocidos como kanji",
        },
    ]
};
export default data;