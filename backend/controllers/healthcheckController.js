export const healthCheck = (req , res) => {
    res.json({
        success : true,
        message : 'healthCheck Route working'
    })
}