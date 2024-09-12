import './bootstrap';
var channel=window.Echo.channel('Channel2x');
       channel.listen('.Event2x', (e) => {
        console.log(e.message);
        alert("jkfljdlfj")
    });


