const Booking = require('../models/Booking');
exports.createBookings = async(req,res) => {
    try{
        const userData = req.user;
        const {place, checkIn, checkOut, numberOfGuest, name, phone, price} = req.body;
        const booking = await Booking.create({
            user: userData.id,
            place,
            checkIn,
            checkOut,
            numberOfGuest,
            name,
            phone,
            price,
        });
        res.status(200).json({
            booking,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error:err,
        });
    }
};
exports.getBookings = async (req,res) => {
    try {
        const userData = req.user;
        if(!userData) {
            return res.status(401)
            .json({error: 'you are not authorized to access the page'})
        }
        const booking = await Booking.find({user: userData.id}).populate('place')
        res.status(200).json({booking,success:true})
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error is there',
            error: err,
        })
    }
}