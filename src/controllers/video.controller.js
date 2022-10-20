const videoCtrl = {}

const Video = require('../models/Video')

videoCtrl.getVideo = async (req, res) => {
    const videos = await Video.find()
    res.json(videos)
    res.send('Listado de videos')
}

videoCtrl.createVideo = async (req, res) => {
    const { titulo, descripcion, url } = req.body
    const newVideo = new Video({
        titulo: titulo,
        descripcion: descripcion,
        url: url
    })
    await newVideo.save()
    res.send('El nuevo video ha sido creado')
}

videoCtrl.updateVideo = async (req, res) => {
    const { titulo, descripcion, url } = req.body
    await Video.findByIdAndUpdate(req.params.id, {
        titulo: titulo,
        descripcion: descripcion,
        url: url
    })
    res.send('El video ha sido actualizado')
}

videoCtrl.deleteVideo = async (req, res) => {
    await Video.findByIdAndDelete(req.params.id)
    res.send('El video ha sido borrado')
}

module.exports = videoCtrl