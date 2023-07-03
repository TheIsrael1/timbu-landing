import { z, defineCollection, reference } from 'astro:content';



// major
const faqSchema =  z.object({
        question: z.string(),
        answer: z.string()
})

const caseStudySchema = z.object({
    image: z.string(),
    tag: z.string(),
    title: z.string(),
    description: z.string()
})

const toolSchema = z.object({
    toolName: z.string(),
    heroTitle: z.string(),
    phrase: z.string(),
    description: z.string(),
    howSectionTitle: z.string(),
    howSectionDescription: z.string(),
    howSectionTutorial: z.string().url(),
    sections: z.array(z.object({
        image: z.string(),
        heading: z.string(),
        paragraph: z.string()
    })),
    businessTypes: z.array(reference('businessTypes')),
    icon: z.string()
})

const customersSchema = z.object({
name: z.string(),
works: z.string(),
image: z.string(),
shortSentence: z.string(),
longSentence: z.string(),
customerType: z.enum(["business", "freelancer"])
})

 
const businessTypesSchema = z.object({
    name: z.string(),
    heroTitle: z.string(),
    heroTitleKeyword: z.string(), 
    heroImage: z.string(),
    phrase: z.string(),
    description: z.string(),
    customers: z.array(reference('customers')),
    howToSectionTitles: z.string(),
    howToCaseStudies: z.array(reference('caseStudies')),
    marketingVideoTitle: z.string(),
    marketingVideoLink: z.string().url(),
    marketingSectionTitle: z.string(),
    marketingSectionDescription: z.string(),
    marketingFeatures: z.array(reference('tools'))
})


const landingSchema = z.object({
    heroTitle: z.string(),
    heroTitleKeyWord: z.string(),
    heroSubTitle: z.string(),
    heroDescription: z.string(),
    heroBusinessPartners: z.array(reference('customers')),
    subHeroTitle:  z.string(),
    subHeroTitleKeyword: z.string(),
    subHeroDescription: z.string(),
    subHeroImage: z.string(),
    howSectionTitle: z.string(),
    howSectionContent: z.array(reference('caseStudies')),
    marketingVideoTitle: z.string(),
    marketingVideoLink: z.string().url(),
    marketingSectionTitle: z.string(),
    marketingSectionDescription: z.string(),
    marketingFeatures: z.array(reference('tools'))
})

const pricingSchema = z.object({

})

const footerLinksSchema = z.object({
    category: z.enum(["services", "marketplace", "categories", "support", "legals", "about"]),
    links: z.array(z.object({
        title: z.string(),
        url: z.string()
    })).optional()
})


export type FaqSchema = z.infer<typeof faqSchema>
export type BusinessTypesSchema = z.infer<typeof businessTypesSchema>
export type ToolSchema = z.infer<typeof toolSchema>

const faqCollection = defineCollection({
    type: 'content',
    schema: faqSchema
})

const businessTypesCollection = defineCollection({
     type: 'content',
    schema: businessTypesSchema
})

const customersCollection = defineCollection({
 type: 'content',
 schema: customersSchema
})

const landingCollection = defineCollection({
 type: 'content',
 schema: landingSchema
})

const pricingCollection = defineCollection({
 type: 'content',
 schema: pricingSchema
})

const toolsCollection = defineCollection({
 type: 'content',
 schema: toolSchema
})

const caseStudiesCollection = defineCollection({
    type: 'content',
    schema: caseStudySchema
})


const footerLinksCollection = defineCollection({
    type: 'content',
    schema: footerLinksSchema
})

export const collections = {
    'faq': faqCollection,
    'businessTypes': businessTypesCollection,
    'customers': customersCollection,
    'landing': landingCollection,
    'pricing': pricingCollection,
    'tools': toolsCollection,
    'caseStudies': caseStudiesCollection,
    'footerLinks': footerLinksCollection
}

