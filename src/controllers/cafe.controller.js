const cafeCtrl = {}

const Cafe = require('../models/Cafe')

cafeCtrl.getCafe = async (req, res) => {
    const cafes = await Cafe.find()
    res.json(cafes)
}

cafeCtrl.getOneCafe = async (req, res) => {
    const unCafe = await Cafe.findById(req.params.id)
    res.json(unCafe)
}

cafeCtrl.createCafe = async (req, res) => {
    const { nombre, sabor, descripcion, precio, peso } = req.body
    const newCafe = new Cafe({
        nombre: nombre,
        sabor: sabor,
        descripcion: descripcion,
        precio: precio,
        peso: peso
    })
    await newCafe.save()
    res.send('El cafe ha sido guardado')
}

cafeCtrl.updateCafe = async (req, res) => {
    const { nombre, sabor, descripcion, precio, peso } = req.body
    await Cafe.findByIdAndUpdate(req.params.id, {
        nombre: nombre,
        sabor: sabor,
        descripcion: descripcion,
        precio: precio,
        peso: peso
    })
    res.send('El cafe ha sido actualizado')
}

cafeCtrl.deleteCafe = async (req, res) => {
    await Cafe.findByIdAndDelete(req.params.id)
    res.send('el cafecito ha sido eliminado')
}

module.exports = cafeCtrl