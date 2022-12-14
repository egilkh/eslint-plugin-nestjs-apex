export = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  rules: {
    //  "nestjs-typed/api-methods-have-documentation": "error",
    'nestjs-apex/api-method-should-specify-api-response': 'error',
    'nestjs-apex/class-named-service-should-have-injectable-decorator': 'error',
    'nestjs-apex/class-named-guard-should-have-injectable-decorator': 'error',
    'nestjs-apex/sequelize-transactions-must-be-committed': 'error',
    'nestjs-apex/branded-properties-should-have-api-property-decorator-with-type':
      [
        'error',
        {
          fileEndings: ['.dto.ts'],
        },
      ],
  },
};
