import { Button } from './Button'

export const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 bg-blue-900 h-16'>
            <div>
                <span>Crypto Rewards</span>
            </div>
            <div className='flex justify-evenly w-96 items-center'>
                <Button text='Crear nuevo' primary />
                <Button text='Registrar uso' />
                <Button text='Salir' primary />
            </div>
        </div>
    )
}
