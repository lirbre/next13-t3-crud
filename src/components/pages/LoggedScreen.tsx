import { BaseSkeleton } from '@/components/templates/BaseSkeleton'
import { Welcome } from '../atoms/Welcome'
import { WhiteFrame } from '../atoms/WhiteFrame'

export const LoggedScreen = () => {
  return (
    <BaseSkeleton title="Next 13 - T3 - Home">
      <WhiteFrame>
        <Welcome />
      </WhiteFrame>
    </BaseSkeleton>
  )
}
