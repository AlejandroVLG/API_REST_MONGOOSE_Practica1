const { Router } = require('express')
const router = Router()

const {
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo
} = require('../controllers/video.controller')

router.route('/')
    .get(getVideo)
    .post(createVideo)

router.route('/:id')
    .update(updateVideo)
    .delete(deleteVideo)

module.exports = router