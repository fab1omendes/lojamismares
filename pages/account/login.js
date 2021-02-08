import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <Head>
                <title>Cadastre-se ou entre em sua conta</title>
            </Head>
            <form className="mx-auto my-4" style={{ maxWidth: '350px' }} >
                <div>
                    <h5 style={{ paddingTop: '20px', paddingBottom: '20px'}}>Já sou cliente MM</h5>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Endereço de email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-dark w-100">Entrar</button>
                <p className="my-2">Você não possui conta?
                <Link href="/account/register"><a style={{color: 'crimson'}}> Registre-se</a></Link>
                </p>
            </form>
        </div>
    )
}
export default Login