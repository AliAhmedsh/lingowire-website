import { useState, useEffect } from 'react'
import { 
  Globe, 
  Users, 
  MessageCircle, 
  Sparkles, 
  ChevronRight,
  Mail,
  Check,
  Menu,
  X
} from 'lucide-react'

// Styles object
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    zIndex: 50,
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  navContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  heroSection: {
    paddingTop: '6rem',
    paddingBottom: '3rem',
    padding: '6rem 1rem 3rem',
    textAlign: 'center',
  },
  heroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  emojiContainer: {
    display: 'inline-block',
    marginBottom: '2rem',
    position: 'relative',
  },
  mainEmoji: {
    fontSize: '8rem',
  },
  accentEmoji: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    padding: '0.5rem',
    fontSize: '1.5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#667eea',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textDecoration: 'none',
  },
  ctaText: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  comingSoon: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  featuresSection: {
    padding: '4rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
  },
  featuresContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s',
  },
  featureIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    padding: '0.75rem',
    display: 'inline-block',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  formSection: {
    padding: '4rem 1rem',
  },
  formContainer: {
    maxWidth: '48rem',
    margin: '0 auto',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    color: 'white',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
  },
  submitButton: {
    width: '100%',
    backgroundColor: 'white',
    color: '#667eea',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s, opacity 0.3s',
  },
  successMessage: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    border: '1px solid rgba(34, 197, 94, 0.5)',
    borderRadius: '0.5rem',
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    padding: '2rem 1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    color: 'white',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
  },
  mobileMenu: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileNavLinks: {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem',
  },
  mobileNavLink: {
    display: 'block',
    padding: '0.75rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
  },
}

function App() {
  const [waitlistForm, setWaitlistForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    language: ''
  })
  
  const [tutorForm, setTutorForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    languages: ''
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false)
  const [isTutorSubmitting, setIsTutorSubmitting] = useState(false)
  const [waitlistSuccess, setWaitlistSuccess] = useState(false)
  const [tutorSuccess, setTutorSuccess] = useState(false)

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setIsWaitlistSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setWaitlistForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        language: ''
      })
      setWaitlistSuccess(true)
      setTimeout(() => setWaitlistSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting waitlist form:', error)
    } finally {
      setIsWaitlistSubmitting(false)
    }
  }

  const handleTutorSubmit = async (e) => {
    e.preventDefault()
    setIsTutorSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setTutorForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        languages: ''
      })
      setTutorSuccess(true)
      setTimeout(() => setTutorSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting tutor form:', error)
    } finally {
      setIsTutorSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Users size={24} color="white" />,
      title: "Practice with real people, not just flashcards",
      description: "Connect with language partners worldwide"
    },
    {
      icon: <Globe size={24} color="white" />,
      title: "Support for all languages",
      description: "Including low-resource and heritage languages"
    },
    {
      icon: <MessageCircle size={24} color="white" />,
      title: "Learn through dialogue",
      description: "Structured prompts, stories, and real-life topics"
    },
    {
      icon: <Sparkles size={24} color="white" />,
      title: "Connection leads to fluency",
      description: "Not just memorization, but real conversation skills"
    }
  ]

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Lingowire</div>
          
          {/* Desktop Navigation */}
          <div style={{ ...styles.navLinks, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#waitlist" style={styles.navLink}>Join Waitlist</a>
            <a href="#tutors" style={styles.navLink}>For Tutors</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>

          {/* Mobile menu button */}
          {window.innerWidth <= 768 && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.mobileMenuButton}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={styles.mobileNavLinks}>
            <a href="#features" style={styles.mobileNavLink}>Features</a>
            <a href="#waitlist" style={styles.mobileNavLink}>Join Waitlist</a>
            <a href="#tutors" style={styles.mobileNavLink}>For Tutors</a>
            <a href="#contact" style={styles.mobileNavLink}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div className="animate-float" style={styles.emojiContainer}>
            <div style={{ position: 'relative' }}>
              <span style={styles.mainEmoji}>🌍</span>
              <div className="animate-pulse-slow" style={{ ...styles.accentEmoji, top: '-8px', right: '-8px' }}>
                <span>💬</span>
              </div>
              <div className="animate-pulse-slow" style={{ ...styles.accentEmoji, bottom: '-8px', left: '-8px', animationDelay: '1s' }}>
                <span>🗣️</span>
              </div>
              <div className="animate-pulse-slow" style={{ ...styles.accentEmoji, top: '32px', right: '-32px', animationDelay: '2s' }}>
                <span>✨</span>
              </div>
            </div>
          </div>
          
          <h1 style={styles.title}>
            Don't just learn a language,<br />speak it!
          </h1>
          
          <p style={styles.subtitle}>
            Build fluency through real conversations and community, especially in languages often left behind.
          </p>
          
          <div style={styles.ctaContainer}>
            <a href="#waitlist" style={styles.ctaButton}>
              Join the Waitlist <ChevronRight size={20} />
            </a>
            <p style={styles.ctaText}>Be the first to try the app when it launches</p>
          </div>
          
          <p style={styles.comingSoon}>Coming soon to the App Store and Google Play</p>
        </div>
      </section>

      {/* Why Lingowire Section */}
      <section id="features" style={styles.featuresSection}>
        <div style={styles.featuresContainer}>
          <h2 style={styles.sectionTitle}>Why Lingowire?</h2>
          <p style={styles.sectionSubtitle}>Most apps teach vocabulary. We help you speak.</p>
          
          <p style={{ ...styles.sectionSubtitle, fontSize: '1.125rem', marginBottom: '3rem' }}>
            Lingowire pairs you with language partners and gives you tools to practice, 
            solo or together through guided conversations and community-powered content.
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
          
          <p style={{ ...styles.sectionSubtitle, fontSize: '1.125rem' }}>
            Lingowire helps you speak any language by connecting you with real people, 
            from heritage learners to fluent speakers. Practice through guided conversations, 
            stories, and feedback.
          </p>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Join the Waitlist</h2>
          <p style={{ ...styles.sectionSubtitle, marginBottom: '2rem' }}>Be the first to know when the app launches.</p>
          
          <form onSubmit={handleWaitlistSubmit} style={styles.form}>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>First Name</label>
                <input
                  type="text"
                  required
                  value={waitlistForm.firstName}
                  onChange={(e) => setWaitlistForm({...waitlistForm, firstName: e.target.value})}
                  style={styles.input}
                  placeholder="John"
                />
              </div>
              <div>
                <label style={styles.label}>Last Name</label>
                <input
                  type="text"
                  required
                  value={waitlistForm.lastName}
                  onChange={(e) => setWaitlistForm({...waitlistForm, lastName: e.target.value})}
                  style={styles.input}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                required
                value={waitlistForm.email}
                onChange={(e) => setWaitlistForm({...waitlistForm, email: e.target.value})}
                style={styles.input}
                placeholder="john@example.com"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone (Optional)</label>
              <input
                type="tel"
                value={waitlistForm.phone}
                onChange={(e) => setWaitlistForm({...waitlistForm, phone: e.target.value})}
                style={styles.input}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>What language are you learning or interested in learning?</label>
              <input
                type="text"
                required
                value={waitlistForm.language}
                onChange={(e) => setWaitlistForm({...waitlistForm, language: e.target.value})}
                style={styles.input}
                placeholder="Spanish, Mandarin, etc."
              />
            </div>
            
            <button
              type="submit"
              disabled={isWaitlistSubmitting}
              style={{
                ...styles.submitButton,
                opacity: isWaitlistSubmitting ? 0.5 : 1,
                cursor: isWaitlistSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isWaitlistSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {waitlistSuccess && (
              <div style={styles.successMessage}>
                <Check size={20} style={{ display: 'inline', marginRight: '8px' }} />
                Thank you for joining our waitlist! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Tutors Form Section */}
      <section id="tutors" style={{ ...styles.formSection, ...styles.featuresSection }}>
        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Want to contribute as a tutor or native speaker?</h2>
          <p style={{ ...styles.sectionSubtitle, marginBottom: '2rem' }}>
            We're building something new, and your voice matters. Share your knowledge, 
            support learners, and help shape language learning for all.
          </p>
          
          <form onSubmit={handleTutorSubmit} style={styles.form}>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>First Name</label>
                <input
                  type="text"
                  required
                  value={tutorForm.firstName}
                  onChange={(e) => setTutorForm({...tutorForm, firstName: e.target.value})}
                  style={styles.input}
                  placeholder="Jane"
                />
              </div>
              <div>
                <label style={styles.label}>Last Name</label>
                <input
                  type="text"
                  required
                  value={tutorForm.lastName}
                  onChange={(e) => setTutorForm({...tutorForm, lastName: e.target.value})}
                  style={styles.input}
                  placeholder="Smith"
                />
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                required
                value={tutorForm.email}
                onChange={(e) => setTutorForm({...tutorForm, email: e.target.value})}
                style={styles.input}
                placeholder="jane@example.com"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input
                type="tel"
                required
                value={tutorForm.phone}
                onChange={(e) => setTutorForm({...tutorForm, phone: e.target.value})}
                style={styles.input}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>What language(s) do you speak or teach?</label>
              <input
                type="text"
                required
                value={tutorForm.languages}
                onChange={(e) => setTutorForm({...tutorForm, languages: e.target.value})}
                style={styles.input}
                placeholder="English, French, Arabic, etc."
              />
            </div>
            
            <button
              type="submit"
              disabled={isTutorSubmitting}
              style={{
                ...styles.submitButton,
                opacity: isTutorSubmitting ? 0.5 : 1,
                cursor: isTutorSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isTutorSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {tutorSuccess && (
              <div style={styles.successMessage}>
                <Check size={20} style={{ display: 'inline', marginRight: '8px' }} />
                Thank you for your interest in becoming a tutor! We'll contact you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Tagline Section */}
      <section style={styles.formSection}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...styles.sectionTitle, fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}>
            Built for every language. Especially yours.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            From widely spoken to lesser-known, Lingowire is designed for all.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Mail size={20} />
            <a href="mailto:admin@lingowire.com" style={styles.footerLink}>admin@lingowire.com</a>
          </div>
          <p>&copy; Lingowire 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default App
