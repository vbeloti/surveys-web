import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([{
  id: faker.random.uuid(),
  question: faker.random.words(),
  answers: [
    {
      answer: faker.random.words(4),
      image: faker.internet.url()
    },
    { answer: faker.random.words(5) }
  ],
  didAnswer: faker.random.boolean(),
  date: faker.date.recent()
}])
