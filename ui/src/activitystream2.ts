/*
  Credits
  =======
  This is based on the work of Benjamin Goering (https://bengo.is/, @bengo at twitter)

  You can find the original repo here: https://github.com/gobengo/activitystreams2/blob/master/src/vocabulary.ts
*/

/**
 * @file ActivityStreams 2.0 Core
 * @see https://www.w3.org/TR/activitystreams-core/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the core spec.
 */

export const jsonLdProfile = "https://www.w3.org/ns/activitystreams";

// application/ld+json; profile="https://www.w3.org/ns/activitystreams"
export const jsonLdProfileContentType = `application/ld+json; profile="${jsonLdProfile}"`;

interface JSONLDContextMapping {
  [key: string]: string | { [key: string]: string };
}
export interface JSONObject {
  [key: string]: string | JSONObject;
}
export interface JSONLDContext {
  "@vocab"?: string;
  "@language"?: string;
}

interface JsonLdObject {
  "@context"?: JSONLDContext & JSONObject;
}

export type LDIdentifier = xsdAnyUri;
export type LDValue<T> = LDIdentifier | T;
export type LDValues<T> = T | T[];
export type LDObject<T> = {
  [P in keyof T]?: LDValues<T[P]>;
};

type ISO8601 = string;

export type xsdAnyUri = string;

type OneOrMore<T> = T | T[];

/** @todo (bengo.is) string could be more specific, e.g. LDIdentifier */
export type ASValue = string | ASObject | Link;

/** @todo (bengo.is) enumerage lang strings */
type RdfLangString = string;
interface NaturalLanguageValue {
  // @TODO (bengo) this could be more specific about keys than just string
  [key: string]: string;
}

/**
 * Representing value of as:type property that must include a certain value.
 * This is useful because as:type can be a string or array (for multiple types).
 * ASObjectType<"Link"> should allow ["Link", "someOtherTypeUri"]
 */
export type ASObjectType = OneOrMore<string>;

/**
 * @see https://www.w3.org/TR/activitystreams-core/#object
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
 */
export class ASObject {
  attachment?: OneOrMore<ASObject | Link>;
  attributedTo?: LDValue<ASObject>;
  bcc?: LDValue<ASObject>;
  cc?: OneOrMore<LDValue<ASObject>>;
  content?: string;
  generator?: LDValue<ASObject>;
  id?: string;
  image?: OneOrMore<string | Link | Image>;
  inReplyTo?: LDValue<ASObject>;
  location?: ASObject;
  name?: string;
  nameMap?: NaturalLanguageValue;
  preview?: ASValue;
  published?: ISO8601;
  replies?: LDValue<Collection<ASObject>>;
  summary?: string | RdfLangString;
  tag?: ASObject | Link;
  to?: LDValue<ASObject>;
  bto?: LDValue<ASObject>;
  type?: ASObjectType;
  url?: OneOrMore<xsdAnyUri | Link>;
}

/**
 * Test whether an object is an ASObject
 * @param obj - object to test
 * @todo (bengo.is) check way more than this.
 */
export const isASObject = (obj: object): obj is ASObject => {
  return typeof obj === "object";
};

type LinkRelation = string;

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link
 */
export class Link {
  type: ASObjectType = "Link";
  href: xsdAnyUri;
  mediaType?: string;
  rel?: LinkRelation;
  constructor(init: { href: xsdAnyUri } & Partial<Link>) {
    Object.assign(this, init);
    this.href = init.href;
  }
}

/**
 * Test whether an object is an Link
 * @param obj - object to test whether it is an Link
 */
export const isLink = (obj: ASObject): obj is Link => {
  return obj.type === "Link";
};

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
 */
export class Activity extends ASObject {
  actor?: ASValue;
  object?: LDValue<ASObject>;
  target?: ASValue;
  constructor(props: object) {
    super();
    this.type = this.constructor.name;
    Object.assign(this, props);
  }
}

// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
export const activitySubtypes = [
  "Accept",
  "Add",
  "Announce",
  "Arrive",
  "Block",
  "Create",
  "Delete",
  "Dislike",
  "Flag",
  "Follow",
  "Ignore",
  "Invite",
  "Join",
  "Leave",
  "Like",
  "Listen",
  "Move",
  "Offer",
  "Question",
  "Reject",
  "Read",
  "Remove",
  "TentativeReject",
  "TentativeAccept",
  "Travel",
  "Undo",
  "Update",
  "View"
];

const strEnum = <T extends string>(o: T[]): { [K in T]: K } => {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
};

export const activitySubtypesEnumMap = strEnum(activitySubtypes);
export type ActivitySubtype = keyof typeof activitySubtypesEnumMap;

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collection
 */
export class Collection<T> extends ASObject {
  items?: T[];
  totalItems?: number;
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollection
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collectionpage
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollectionpage
 * @todo (bengo.is) implement this
 */

/**
 * @file ActivityStreams 2.0 Vocabulary
 * @see https://www.w3.org/TR/activitystreams-vocabulary/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the vocabulary spec.
 */

// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types

/**
 * Indicates that the actor accepts the object.
 * The target property can be used in certain circumstances to indicate the
 * context into which the object has been accepted.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept
 */
export class Accept extends Activity {
  type = "Accept";
}

/**
 * A specialization of Accept indicating that the acceptance is tentative.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept
 */
export class TentativeAccept extends Accept {
  type = "TentativeAccept";
}

/**
 * Indicates that the actor has added the object to the target. If the target
 * property is not explicitly specified, the target would need to be determined
 * implicitly by context. The origin can be used to identify the context from
 * which the object originated.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add
 */
export class Add extends Activity {
  type = "Add";
}

/**
 * Indicates that the actor is calling the target's attention the object.
 * The origin typically has no defined meaning.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
 */
export class Announce extends Activity {
  type = "Announce";
}

export class Arrive extends Activity {
  type = "Arrive";
}

export class Create extends Activity {
  type = "Create";
}

export class Delete extends Activity {
  type = "Delete";
}

export class Follow extends Activity {
  type = "Follow";
}

export class Ignore extends Activity {
  type = "Ignore";
}

export class Join extends Activity {
  type = "Join";
}

export class Leave extends Activity {
  type = "Leave";
}

export class Like extends Activity {
  type = "Like";
}

export class Offer extends Activity {
  type = "Offer";
}

export class Invite extends Activity {
  type = "Invite";
}

export class Reject extends Activity {
  type = "Reject";
}

export class TentativeReject extends Activity {
  type = "TentativeReject";
}

export class Remove extends Activity {
  type = "Remove";
}

export class Undo extends Activity {
  type = "Undo";
}

export class Update extends Activity {
  type = "Update";
}

export class View extends Activity {
  type = "View";
}

export class Listen extends Activity {
  type = "Listen";
}

export class Read extends Activity {
  type = "Read";
}

export class Move extends Activity {
  type = "Move";
}

export class Travel extends Activity {
  type = "Travel";
}

export class Block extends Activity {
  type = "Block";
}

export class Flag extends Activity {
  type = "Flag";
}

export class Dislike extends Activity {
  type = "Dislike";
}

export class Question extends Activity {
  type = "Question";
}

/**
 *
 */

/** @todo https://www.w3.org/TR/activitystreams-vocabulary/#actor-types */

// https://www.w3.org/TR/activitystreams-vocabulary/#object-types

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image
 */
export class Image extends ASObject {
  type: ASObjectType = "Image";
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
 */
export class Note extends ASObject {
  type: ASObjectType = "Note";
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place
 */
export class Place extends ASObject {
  accuracy?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  radius?: number;
  units?: "cm" | "feet" | "inches" | "km" | "m" | "miles" | xsdAnyUri;
}
