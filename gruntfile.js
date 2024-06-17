module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        replace:{
            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files:{
                    'prebuild/index.html': 'src/index.html'
                }
                }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin')

    grunt.registerTask('default', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}