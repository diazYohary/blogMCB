const ULR_PARAMS_OBJECT = {
    // filter per slug of the landing page
    filters: {
        slug: {
            $eq: 'blog-landing-page',
        },
    },
    populate: {
        bloques: {
            populate: '*',
            on: {
                'sections.carrusel-videos': {
                    populate: {
                        fields: ['id', 'titulo'],
                        videos: {
                            fields: ['id', 'url', 'titulo'],
                            populate: {
                                imagen: {
                                    fields: ['id', 'url'],
                                },
                            },
                        },
                    },
                },
                'sections.carrusel-articulos': {
                    populate: {
                        fields: ['id', 'titulo', 'tipo'],
                        categoria: {
                            fields: ['id', 'nombre'],
                        },
                    },
                },
                'blocks.banner': {
                    populate: {
                        link: {
                            fields: ['url', 'id', 'newTab'],
                        },
                        visual: {
                            populate: {
                                imagen: {
                                    fields: ['url'],
                                },
                                lottie: {
                                    fields: ['url'],
                                }
                            }
                        },
                    }
                },
                'sections.articulo-destacado': {
                    populate: {
                        fields: ['id'],
                        articulo: {
                            fields: ['id', 'titulo', 'descripcion', 'slug'],
                            populate: {
                                portada: {
                                    fields: ['url'],
                                },
                            }
                        },
                    },
                },
                'sections.seccion-articulos': {
                    populate: {
                        fields: ['id', 'titulo'],
                        articulos: {
                            fields: ['id', 'titulo', 'descripcion', 'slug', 'subtitulo', 'publishedAt'],
                            populate: {
                                portada: {
                                    fields: ['url'],
                                },
                            }
                        },
                        estilos: {
                            fields: '*'
                        },
                        visual: {
                            populate: {
                                imagen: {
                                    fields: ['url'],
                                },
                                lottie: {
                                    fields: ['url'],
                                }
                            }
                        },
                    }
                }
            },
        },
    },
};

export default ULR_PARAMS_OBJECT