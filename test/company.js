import { Model } from 'objection'
import path from 'path'

export default class Company extends Model {
  static tableName = 'companies'

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: {type: 'integer'},
      name: {type: 'string'},
      ceo: {type: ['integer', 'null']}
    }
  }

  // This object defines the relations to other models.
  static relationMappings = {
    ceos: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '/people'),
      join: {
        from: 'companies.ceo',
        to: 'people.id'
      }
    }
  }
}
