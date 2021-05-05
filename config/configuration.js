module.exports={
    mongoDbUrl : 'mongodb+srv://manishgupta:manish@cluster0.vw7uc.mongodb.net/test',
    PORT : process.env.PORT || 3000,
    globalVariables:(req,res,next)=>{
        res.locals.success_message= req.flash('success-message');
        res.locals.error_message= req.flash('error-message');
        res.locals.user = req.user || null;
        next();
    },

};
