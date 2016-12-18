namespace jf2 {
    /**
     * @see {@link http://microformats.org/wiki/h-card}
     */
    export interface Card {
        additionalName?: string,
        anniversary?: Date,
        adr?: Adr,
        bday?: Date,
        category?: string,
        email?: string,
        familyName?: string,
        genderIdentity?: string,
        givenName?: string,
        honorificPrefix?: string,
        honorificSuffix?: string,
        impp?: string,
        jobTitle?: string,
        key?: string,
        logo?: string,
        name?: string,
        nickname?: string,
        note?: string,
        org?: Card,
        photo?: string,
        role?: string,
        sex?: string,
        sortString?: string,
        tel?: string,
        uid?: string,
        url?: string
    }
};
