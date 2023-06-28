import { z, defineCollection } from 'astro:content';

const faqSchema =  z.object({
        question: z.string(),
        answer: z.string()
})

const toolSchema = z.object({
    heroTitle: z.string(),
    phrase: z.string(),
    description: z.string(),
    sections: z.array(z.object({
        image: z.string().url(),
        heading: z.string(),
        paragraph: z.string()
    }))
})

const customersSchema = z.object({
name: z.string(),
works: z.string(),
image: z.string().url(),
shortSentence: z.string(),
longSentence: z.string(),
customerType: z.enum(["business", "freelancer"])
})

 
const businessTypesSchema = z.object({
    heroTitle: z.string(),
    phrase: z.string(),
    description: z.string(),
    customers: z.array(customersSchema),
    caseStudies: z.array(z.object({
        image: z.string().url(),
        title: z.string(),
        paragraphOne: z.string(),
        paragraphTwo: z.string(),
    }))
})


const landingSchema = z.object({

})

const pricingSchema = z.object({

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

export const collections = {
    'faq': faqCollection,
    'businessTypes': businessTypesCollection,
    'customers': customersCollection,
    'landing': landingCollection,
    'pricing': pricingCollection,
    'tools': toolsCollection
}