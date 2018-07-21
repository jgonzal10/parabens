const express = require('express'),
patch =  require('path');

const app =  express();
app.use(express.static('.dist/parabens'));

app.get('/*',(req,res)=>{
    res.sendFile(Path.join(__dirname,'/dist/parabens/index.html'));
});

app.listen(process.env.PORT || 8000,()=>{
    console.log('Server started');
})