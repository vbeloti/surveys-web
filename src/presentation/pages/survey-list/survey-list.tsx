import Styles from './survey-list-styles.scss'
import React from 'react'
import { Header, Footer } from '@/presentation/components'
import { SurveyListItem } from '@/presentation/pages/survey-list/components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyListItem />
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
