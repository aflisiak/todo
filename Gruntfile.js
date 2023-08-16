module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            default: {
                tsconfig: './tsconfig.json',
            },
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['index.html', 'app.js'],
                        dest: 'dist/',
                    },
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['ts', 'copy']);
};
