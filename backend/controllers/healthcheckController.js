export const healthCheck = (req , res) => {
    res.send({
        error : false,
        success : true,
        message : 'healthCheck Route working'
    })
}