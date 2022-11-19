import { AuthContext } from '../../Context/AuthContext';

export default function Profile() {
  return (
    <>
      <AuthContext.Consumer>
        {
          context =>
            <div className="display-1">
              Bienvenido/a {context.user.name} {context.user.lastname}
            </div>
        }
      </AuthContext.Consumer>
    </>
  )
}
