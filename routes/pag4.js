module.exports = (app)=>{
    app.get('/localizacao',(req, res)=>{
        res.render('pagina4.ejs')
    })


app.get('/mapa', (req,res)=>{
    res.redirect("http://maps.google.com")
})
}