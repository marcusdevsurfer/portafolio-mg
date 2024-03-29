import React from 'react'

const style = {
    'minHeight': '8vh'
}

export const Navbar = () => {
    return (
            <nav style={style} class="navbar navbar-expand-lg bg-black mb-3">
                <div class="container-fluid">
                    <a class="navbar-brand border bg-white rounded-circle bg-black p-1" href="#">MG</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="text-white navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
    )
}
