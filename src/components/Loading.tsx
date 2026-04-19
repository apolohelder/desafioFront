

export function Loading() {
    return (
        <div className="container py-5">
            <div className="card shadow-sm p-4">
                <div className="row align-items-center placeholder-glow">

                    <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
                        <div style={{ padding: '70px' }} className="placeholder rounded-circle" />
                    </div>

                    <div className="col-12 col-md-9 d-flex flex-column">
                        <div className="mb-2 py-3 col-4 placeholder" />

                        <div className="mb-2 py-2 col-2 placeholder" />

                        <div className="row">
                            <div className="col-6 col-md-4 d-flex flex-column">
                                <strong>Seguidores</strong>
                                <div className="mt-2 py-2 col-2 placeholder" />
                            </div>

                            <div className="col-6 col-md-4 d-flex flex-column">
                                <strong>Seguindo</strong>
                                <div className="mt-2 py-2 col-2 placeholder" />
                            </div>

                            <div className="col-12 col-md-4 d-flex flex-column">
                                <strong>E-mail</strong>
                                <div className="mt-2 py-2 col-2 placeholder" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}