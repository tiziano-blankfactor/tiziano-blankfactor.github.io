function Payment() {

    _self.window.plugins.Toaster.show('Bienvenido a Prontomas', 'long', ()=> {
        console.log('Native toast displayed')
    }, ()=> {
        console.log('Native toast failed')
    })
};