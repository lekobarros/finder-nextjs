import ArrowLeft from 'src/icons/arrow-left.svg';

export default function TrackHeader () {
  return (
    <header className="w-full flex items-center min-h-4">
      <div>
        <button className="flex items-center justify-center w-16 h-16">
          <ArrowLeft width={24} height={24} />
        </button>
      </div>

      <div className='flex gap-4'>
        <div>
          <img src="https://lekobarros.github.io/finder/img/adventure.jpg" />
        </div>
        <div>
          <h2 className='font-bold'>Nonsense (Feat. Mark Foster)</h2>
          <div>Madeon</div>
        </div>
      </div>
    </header>
  )
}