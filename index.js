import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import {credentials } from "./credentials.js"

initializeApp({ 
    credential: cert(credentials)
})

const db = getFirestore()

// const car = 

//     db.collection('cars')
//     .add({ make: 'Ferrari', model: 'GTO', year: '2008', colour: 'red' })
//     .then(doc => {
//         console.log('Doc added:', doc.id)
//     })
//     .catch(err => console.error(err))

// db.collection('cars').doc('lambo')
// .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, colour: 'yellow'})


// db.collection('cars').doc('lambo')
// .update({ model: 'Diablo', colour: 'hot pink' })


db.collection('cars').doc('lambo').get()
.then(doc => {
    console.log(doc.id)
    console.log(doc.data())
})
.catch(console.error)

// Get a whole collection:
db.collection('cars').get()
.then(collection => {
    collection.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error)

// Query docs from collection:
db.collection('cars')
.where('year', '>=', 2015)
.get()
    .then(collectiom => {
        const cars = collection.docs.map(doc => {
            let car = doc.data()
            car.id = doc.id
            return car

        console.log(cars)
    })
        .catch(console.error)
    