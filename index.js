var app = {
    // Application Constructor
    initialize: function() {
    this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //var targetUrl = "http://3.238.90.251/pos/ui?config_id=1#cids=1";
        //var targetUrl = "http://3.238.90.251";
        var targetUrl = "https://tiziano-blankfactor.github.io"
        window.location.replace(targetUrl);
},
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        window.plugins.Toaster.show('Bienvenido a Prontomas', 'long', ()=> {
            console.log('Native toast displayed')
        }, ()=> {
            console.log('Native toast failed')
        })
    }
};

app.initialize();