
module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    frameworks: [ 'jasmine', , "karma-typescript" ],
    
    karmaTypescriptConfig: {
        compilerOptions: {
            module: "commonjs"
        },
        tsconfig: "./tsconfig.json",
    },
    
    files: [ { pattern: 'src/**/*.ts' },{ pattern: 'src/**/*.spec.ts' } ], //{ pattern: 'src/**/*.ts' }, 
    preprocessors: {
      'src/**/*.ts': [ 'karma-typescript' ],
      'src/**/*.spec.ts': [ 'karma-typescript' ]
    },
    mime: {
        'text/x-typescript': ['ts','tsx']
      },
    reporters: [ 'progress', 'kjhtml' ],
    colors: true,
    //logLevel: config.LOG_INFO,
    autoWatch: true
  })
}