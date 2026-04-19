

export function Loading() {
    return (
        <div className="container py-5">
            <div className="card shadow-sm p-4 placeholder-glow">
                <div className="row align-items-center">

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
                <section>

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 mt-5">
                        <h2 className="h4 mb-3 mb-md-0">Repositórios</h2>
                    </div>

                    <div className="ms-auto mb-3 d-flex align-items-center justify-content-end gap-2">
                        <div className=" py-3 col-3 placeholder" />
                    </div>


                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <div className="card shadow-sm h-100">
                                <div className="card-body d-flex flex-column">
                                    <div className="mt-2 py-2.5 col-3 placeholder" />
                                    <div className="mt-2 py-2.5 col-5 placeholder" />
                                    <div className="mt-3 py-2.5 col-4 placeholder" />
                                    <div className="mt-3 py-2.5 col-3 placeholder" />
                                    <div className="mt-3 py-4 col-3 placeholder" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}