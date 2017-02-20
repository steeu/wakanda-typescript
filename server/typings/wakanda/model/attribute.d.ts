///<reference path="./attributeevent.d.ts" />

interface ModelDataClassAttribute {
    /**
     *(String attributes only) true if Wakanda automatically builds a list of possible values based on existing values
     */
    autoComplete?: boolean;
    /**
     *(UUID attributes only) true if the attribute has the autogenerate property on
     */
    autogenerate?: boolean;
    /**
     *(number attributes only) true if the attribute has the autosequence property on
     */
    autosequence?: boolean;
    /**
     *Size in bytes below which the data of the BLOB attribute will be stored within entities (default=0)
     */
    blob_switch_size?: number;
    /**
     *(Image and Blob attributes only) Client-side cache duration (seconds)
     */
    cacheDuration?: number;
    /**
     *(relation attributes only) true to generate an array
     */
    composition?: boolean;
    /**
     *Default format properties
     */
    defaultFormat?: Object;
    /**
     *(Number attributes only) Default value for the attribute
     */
    defaultValue?: number;
    /**
     *Object containing events for the attribute
     */
    events?: ModelAttributeEvent;
    /**
     *(String attributes only) Length of the attribute value
     */
    fixedLength?: number;
    /**
     *true if the attribute can be used to identify related entities
     */
    identifying?: boolean;
    /**
     *Index kind of the attribute: "btree", "cluster", "keywords", "auto" or "objectPath"
     */
    indexKind?: string;
    /**
     *Attribute kind: "storage", "calculated", "alias", "relatedEntity", "relatedEntities", or "removed"
     */
    kind?: string;
    /**
     *Length limit of the entered text
     */
    limiting_length?: number;
    /**
     *Previous name(s) for the attribute at the database level
     */
    matchColumn?: string;
    /**
     *(String attributes only) Maximum length allowed for the attribute
     */
    maxLength?: number;
    /**
     *(Number attributes only) Maximum value for the attribute
     */
    maxValue?: number;
    /**
     *(String attributes only) Minimum length allowed for the attribute
     */
    minLength?: number;
    /**
     *(Number attributes only) Minimum value for the attribute
     */
    minValue?: number;
    /**
     *true if the attribute contains multi-line values
     */
    multiLine?: boolean;
    /**
     *true = attribute value cannot be null
     */
    not_null?: boolean;
    /**
     *JavaScript accessor function to execute for evaluating a calculated attribute
     */
    onGet?: Function;
    /**
     *JavaScript function to call when a query uses the calculated attribute
     */
    onQuery?: Function;
    /**
     *JavaScript accessor function to execute for processing a value entered in a calculated attribute
     */
    onSet?: Function;
    /**
     *JavaScript function to call when a calculated attribute is sorted
     */
    onSort?: Function;
    /**
     *true to store BLOB data outside of the data file (default=false)
     */
    outside_blob?: boolean;
    /**
     *Path for a related or an alias attribute
     */
    path?: string;
    /**
     *(String attributes only) RegEx pattern to control data entry
     */
    pattern?: string;
    /**
     *true if the attribute is the primary key
     */
    primKey?: boolean;
    /**
     *Attribute is read-only (can only be set by the code)
     */
    readOnly?: boolean;
    /**
     *(relation attributes only) true if the relation attribute uses the reverse path of an existing relation
     */
    reversePath?: boolean;
    /**
     *"public" (default) or "publicOnServer"
     */
    scope?: string;
    /**
     *(Date attributes only) true if the date attribute stores only the "MM/DD/YYYY" format
     */
    simpleDate?: boolean;
    /**
     *true if queries and sorts carried out in the data stored in the attribute do not take any style tags into account
     */
    styled_text?: boolean;
    /**
     *Type of the attribute
     */
        type?: string;
    /**
     *true if values in the attribute must be unique
     */
    unique?: boolean;
    /**
     *associate an event listener function with the attribute
     */
    addEventListener?(event: String, jsCode: Function): void;
}

declare var Attribute: {
    //new (name: String, kind: String, type: String, indexOrPath?: String, options?: Object): ModelDataClassAttribute;
    new (name: String, kind: String, options?: ModelDataClassAttribute): ModelDataClassAttribute;
}
