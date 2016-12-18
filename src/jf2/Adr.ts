namespace jf2 {
    /**
     * @see {@link http://microformats.org/wiki/h-adr}
     */
    export interface Adr {
        countryName?: string,
        extendedAddress?: string,
        geo?: Geo,
        label?: string,
        locality?: string,
        postalCode?: string,
        postOfficeBox?: string,
        region?: string,
        streetAddress?: string
    }
}
