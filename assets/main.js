require.config({
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        vue: {
            exports: 'vue'
        }
    },
    paths: {
        jquery: ['lib/jquery.min', '//cdn.bootcss.com/jquery/3.1.1/jquery.min'],
        vue: 'lib/vue/vue',
        fw: 'lib/FW',
        bootstrap: 'lib/bootstrap/js/bootstrap.min'
    }
});