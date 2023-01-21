import { BaseSkeleton } from '@/components/templates/BaseSkeleton'
import { Welcome } from '../atoms/Welcome'
import { WhiteFrame } from '../atoms/WhiteFrame'

export const LoggedScreen = () => {
  return (
    <BaseSkeleton title="Next 13 - T3 - Home">
      <section className="flex flex-1 flex-col items-center justify-center p-16">
        <WhiteFrame>
          <Welcome />
        </WhiteFrame>
      </section>
    </BaseSkeleton>
  )
}
