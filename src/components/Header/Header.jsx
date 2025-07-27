export const Header = ({ fullNme, position}) => {
    return (
            <div>
                <h1 className='full-name'>{fullNme}</h1>

                <h2 className='position'>{position}</h2>
            </div>
    );
};