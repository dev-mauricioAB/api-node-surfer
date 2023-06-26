import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../../');

moduleAlias.addAliases({
  '@src': path.join(__dirname, 'src'),
  '@test': path.join(__dirname, 'test')
})