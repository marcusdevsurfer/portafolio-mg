import React from 'react'

const style = {
    'minHeight': '8vh'
}

export const Navbar = () => {
    return (
            <nav style={style} class="navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand border rounded-circle bg-white p-1" href="#">MG</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="text-white navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
    )
}
