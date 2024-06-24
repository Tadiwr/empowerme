import SourcesContainer from '@/lib/components/typography/sources_con'
import React from 'react'

export default function FormsOfAbuse() {
  return (
    <div className='flex flex-col' >
        <h1 className='text-4xl font-extrabold header' >Forms and Abuse</h1>

        <SourcesContainer>
            <p>Google, Types and indicators of abuse: Safeguarding adults - SCIE, 3.1 Categories of abuse | PLYMOUTH.GOV.UK</p>
        </SourcesContainer>

        <ol>
            <li>Sexual abuse</li>
            <li>Physical abuse</li>
            <li>Physiological / emotional abuse</li>
            <li>Financial or material abuse</li>
            <li>Modern slavery/human trafficking</li>
            <li>Discriminatory abuse</li>
            <li>Organizational abuse</li>
            <li>Neglect or acts of ommission</li>
        </ol>

        <h1 className='header'>1. Sexual abuse</h1>

        <p>{`Sexual abuse is sexual act forced upon a woman,man or child without their consent. Sexual abuse can be non contact 
        sexual e.g indecent exposure (exposing genitalia either in public or in a setting where others are likely to be offended),
        stalking(the crime of illegally following and watching someone over a period of time, grooming(someone builds a relationship,
        trust and emotional connection with a child or young person so they can manipulate, exploit and abuse them), being made to look at or be involved in the production of sexually abusive material, or being made to watch sexual activities. It may involve physical contact, including but not limited to non-consensual penetrative sexual activities or non-penetrative sexual activities, such as intentional touching`}</p>

        <h1 className='header'>2. Physical abuse</h1> 

        Physical abuse is intentional bodily injury or the use of physical force or mistreatment of one person by another which may or may not result in actual physical injury. This can include  hitting, pushing, pinching, choking, kicking, shoving, or inappropriately using drugs or physical restraints,rough handling, exposure to heat or cold, force feeding, improper administration of medication, denial of treatment(could be healthcare,a good or a service you’re entitled to receive), misuse or illegal use of restraint and deprivation of liberty(you are not free to leave and you are under continuous supervision and control.

        <h1 className='header'>3.Psychological/emotional</h1>

        Psychological abuse  involves the regular and deliberate use of a range of words and non-physical actions used with the purpose to manipulate, hurt, weaken or frighten a person mentally and emotionally. This can be done through threats, humiliation or ridicule, provoking fear of violence, shouting, yelling,swearing, blaming, controlling, intimidation and coercion(the practice of persuading someone to do something by using force or threats),harassment, verbal abuse, cyber bullying, isolation or unreasonable and unjustified withdrawal of services or supportive networks.


        <h1 className='header'>4.Financial/material abuse</h1> 

        Financial/material abuse is the actual or attempted theft, fraud or burglary.  It is the misappropriation or misuse of money, property, benefits, material goods or other asset transactions which the person did not or could not consent to, or which were invalidated by intimidation, coercion (the practice of persuading someone to do something by using force or threats) or deception, internet scamming, withholding of money or the unauthorised or improper use of a person’s money or property, usually to the disadvantage of the person to whom it belongs and staff borrowing money or objects from a service user.

        <h1 className='header'>5. Modern slavery</h1>

        Modern slavery and  is when an individual is exploited by others for commercial or personal gain. It can be in the form of;
        <ul>

        <li>Human trafficking</li>
        <li>Forced labour</li>
        <li>Domestic servitude</li>
        <li>Sexual exploitation, such as escort work, prostitution and pornography</li>
        <li>Debt bondage – being forced to work to pay off debts that realistically they never will be able to</li>

        </ul>



        <h1 className='header'>6. Discriminatory abuse</h1>

        Discriminatory abuse is the unequal treatment of an individual based on age, disability, gender and gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion and belief, sex or sexual orientation. It can also be called Hate crime 


        <h1 className='header'>7.Organizational abuse</h1>

        Organizational abuse is the institutional abuse is the maltreatment of a person from a system of power. This may include ;
        <ul>
            <li>Discouraging visits or the involvement of relatives or friends</li>
            <li>Run-down or overcrowded establishment</li>
            <li>Authoritarian management or rigid regimes</li>
            <li>Lack of leadership and supervision</li>
            <li>Insufficient staff or high turnover resulting in poor quality care</li>
            <li>Abusive and disrespectful attitudes towards people using the service</li>
            <li>Inappropriate use of restraints</li>
            <li>Lack of respect for dignity and privacy</li>
            <li>Failure to manage residents with abusive behaviour</li>
            <li>Not providing adequate food and drink, or assistance with eating</li>
            <li>Not offering choice or promoting independence</li>
            <li>Misuse of medication</li>
            <li>Failure to provide care with dentures, spectacles or hearing aids</li>
            <li>Not taking account of individuals’ cultural, religious or ethnic needs</li>
            <li>Failure to respond to abuse appropriately</li>
            <li>Interference with personal correspondence or communication</li>
            <li>Failure to respond to complaints</li>
        </ul>


        <h1 className='header'>8.Neglect or acts of omission</h1>
        This may include;

        <ul>
            <li>Failure to provide or allow access to food, shelter, clothing, heating, stimulation and activity, personal or medical care</li>
            <li>Providing care in a way that the person dislikes</li>
            <li>Failure to administer medication as prescribed</li>
            <li>Refusal of access to visitors</li>
            <li>Not taking account of individuals’ cultural, religious or ethnic needs</li>
            <li>Not taking account of educational, social and recreational needs</li>
            <li>Ignoring or isolating the person</li>
            <li>Preventing the person from making their own decisions</li>
            <li>Preventing access to glasses, hearing aids, dentures, etc.</li>
            <li>Failure to ensure privacy and dignity</li>
        </ul>

        <h1 className='header'>9. Self neglect</h1>
        Self neglect is when a person being unable, or unwilling, to care for their own essential needs
        This may include;
        
        <ul>
            <li>Lack of self-care to an extent that it threatens personal health and safety</li>
            <li>Neglecting to care for one’s personal hygiene, health or surroundings</li>
            <li>Inability to avoid self-harm</li>
            <li>Failure to seek help or access services to meet health and social care needs</li>
            <li>Inability or unwillingness to manage one’s personal affairs</li>
        </ul>

    </div>
  )
}
