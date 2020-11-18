import { BasePageDoc, DocSection } from "@flexure/base-ui"
import { DocPageStyle } from "./Style"

export const DocPage = (BasePageDoc.decorate(DocPageStyle) as unknown) as typeof BasePageDoc
DocPage.Section = DocSection
