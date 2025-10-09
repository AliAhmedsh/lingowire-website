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
    background: 'white',
    position: 'relative',
    overflow: 'hidden',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    borderBottom: '1px solid #e5e7eb',
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
    color: '#667eea',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Space Grotesk', sans-serif",
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
    fontWeight: '500',
    '&:hover': {
      color: '#667eea',
    },
  },
  heroSection: {
    paddingTop: '8rem',
    paddingBottom: '4rem',
    padding: '8rem 1rem 4rem',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #f9fafb 0%, white 100%)',
    position: 'relative',
    overflow: 'hidden',
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
    fontWeight: '900',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem',
    lineHeight: 1.1,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: '#6b7280',
    marginBottom: '2rem',
    maxWidth: '42rem',
    margin: '0 auto 2rem',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '400',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: '0.02em',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
    },
  },
  ctaText: {
    color: '#6b7280',
    fontSize: '0.875rem',
  },
  comingSoon: {
    color: '#9ca3af',
    fontSize: '0.875rem',
  },
  featuresSection: {
    padding: '4rem 1rem',
    backgroundColor: '#f9fafb',
  },
  featuresContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    textAlign: 'center',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '-0.01em',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  featureIcon: {
    background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
    borderRadius: '50%',
    padding: '1rem',
    marginBottom: '1rem',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem',
    fontFamily: "'Space Grotesk', sans-serif",
  },
  featureDescription: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  formSection: {
    padding: '4rem 1rem',
  },
  formContainer: {
    maxWidth: '48rem',
    margin: '0 auto',
  },
  form: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
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
    color: '#374151',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb',
    border: '1px solid #d1d5db',
    color: '#1f2937',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    '&:focus': {
      borderColor: '#667eea',
    },
  },
  submitButton: {
    width: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s, opacity 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  },
  successMessage: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    borderRadius: '0.5rem',
    color: '#059669',
    textAlign: 'center',
  },
  footer: {
    padding: '2rem 1rem',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'center',
    color: '#6b7280',
    backgroundColor: '#f9fafb',
  },
  footerLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
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
    color: '#667eea',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileNavLinks: {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTop: '1px solid #e5e7eb',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
  },
  mobileNavLink: {
    display: 'block',
    padding: '0.75rem',
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: '500',
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
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set launch date (e.g., 60 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 60);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [])

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
      icon: <Users size={28} color="#667eea" />,
      title: "Real Conversations",
      description: "Practice with native speakers",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop"
    },
    {
      icon: <Globe size={28} color="#667eea" />,
      title: "Global Languages",
      description: "Learn any language you want",
      image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=400&h=300&fit=crop"
    },
    {
      icon: <MessageCircle size={28} color="#667eea" />,
      title: "Interactive Learning",
      description: "Engage through stories & topics",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop"
    },
    {
      icon: <Sparkles size={28} color="#667eea" />,
      title: "Build Fluency",
      description: "Master real conversation skills",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop"
    }
  ]

  return (
    <div style={styles.container}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        opacity: 0.5,
        zIndex: 0,
      }} className="animate-blob" />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'linear-gradient(135deg, #f093fb20 0%, #f5576c20 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        opacity: 0.5,
        zIndex: 0,
        animationDelay: '2s',
      }} className="animate-blob" />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '30%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #fa709a20 0%, #fee14020 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        opacity: 0.5,
        zIndex: 0,
        animationDelay: '4s',
      }} className="animate-blob" />
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <Globe size={28} color="#667eea" />
            <span>Lingowire</span>
          </div>
          
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
        {/* Background Images */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '20px',
          background: 'url("https://images.unsplash.com/photo-1543269664-7eef42226a21?w=150&h=150&fit=crop") center/cover',
          opacity: 0.15,
          transform: 'rotate(12deg)',
        }} className="animate-float" />
        
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '3%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'url("https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=120&h=120&fit=crop") center/cover',
          opacity: 0.12,
        }} className="animate-wave" />
        
        <div style={{
          position: 'absolute',
          top: '200px',
          right: '12%',
          width: '100px',
          height: '100px',
          borderRadius: '15px',
          background: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop") center/cover',
          opacity: 0.1,
          transform: 'rotate(-8deg)',
        }} className="animate-float" />
        
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '25%',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'url("https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=140&h=140&fit=crop") center/cover',
          opacity: 0.08,
        }} className="animate-rotate" />
        
        <div style={{
          position: 'absolute',
          top: '150px',
          right: '35%',
          width: '110px',
          height: '110px',
          borderRadius: '20px',
          background: 'url("https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=110&h=110&fit=crop") center/cover',
          opacity: 0.1,
          transform: 'rotate(5deg)',
        }} className="animate-wave" />
        
        {/* Floating decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '10%',
          fontSize: '2rem',
          opacity: 0.3,
        }} className="animate-wave">🌍</div>
        
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '5%',
          fontSize: '1.5rem',
          opacity: 0.3,
        }} className="animate-float">💬</div>
        
        <div style={{
          position: 'absolute',
          bottom: '50px',
          right: '15%',
          fontSize: '1.8rem',
          opacity: 0.3,
        }} className="animate-wave">📚</div>
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '10%',
          fontSize: '1.6rem',
          opacity: 0.3,
        }} className="animate-float">✨</div>
        
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
          
          <h1 style={styles.title} className="animate-slide-up">
            Speak Any Language<br />With Confidence
          </h1>
          
          <p style={{ ...styles.subtitle, animationDelay: '0.2s' }} className="animate-slide-up">
            Connect with native speakers and build fluency through real conversations.
          </p>
          
          <div style={{ ...styles.ctaContainer, animationDelay: '0.4s' }} className="animate-slide-up">
            <a href="#waitlist" style={styles.ctaButton}>
              Join the Waitlist <ChevronRight size={20} />
            </a>
            <p style={styles.ctaText}>Be the first to try the app when it launches</p>
          </div>
          
          {/* Countdown Timer */}
          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1rem', fontWeight: '500' }}>Launching in:</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: '80px',
                  height: '80px',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  {timeLeft.days}
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Days</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: '80px',
                  height: '80px',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  {timeLeft.hours}
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Hours</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: '80px',
                  height: '80px',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  {timeLeft.minutes}
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Minutes</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: '80px',
                  height: '80px',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }} className="animate-pulse-slow">
                  {timeLeft.seconds}
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Seconds</p>
              </div>
            </div>
          </div>
          
          {/* App Store Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <a 
              href="#" 
              style={{
                display: 'inline-block',
                backgroundColor: '#000',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'transform 0.3s, opacity 0.3s',
                opacity: 0.7,
                cursor: 'not-allowed',
                minWidth: '150px'
              }}
              onClick={(e) => e.preventDefault()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.65rem', opacity: 0.9 }}>Coming soon on</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', fontFamily: "'Space Grotesk', sans-serif" }}>App Store</div>
                </div>
              </div>
            </a>
            
            <a 
              href="#" 
              style={{
                display: 'inline-block',
                backgroundColor: '#000',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'transform 0.3s, opacity 0.3s',
                opacity: 0.7,
                cursor: 'not-allowed',
                minWidth: '150px'
              }}
              onClick={(e) => e.preventDefault()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.65rem', opacity: 0.9 }}>Coming soon on</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', fontFamily: "'Space Grotesk', sans-serif" }}>Google Play</div>
                </div>
              </div>
            </a>
          </div>
          
          <p style={{ ...styles.comingSoon, marginTop: '1rem' }}>Be the first to know when we launch!</p>
        </div>
      </section>

      {/* Mobile App Preview Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>Experience Lingowire Mobile</h2>
          <p style={styles.sectionSubtitle}>Beautiful, intuitive design for seamless language learning</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            alignItems: 'center'
          }}>
            {/* Phone Mockup 1 */}
            <div style={{ textAlign: 'center' }} className="animate-slide-up">
              <div style={{
                width: '250px',
                height: '500px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '2rem',
                padding: '0.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=250&h=500&fit=crop"
                    alt="App Screen 1"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Chat & Learn</h3>
                    <p style={{ fontSize: '0.9rem' }}>Real-time conversations</p>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', fontFamily: "'Space Grotesk', sans-serif" }}>Interactive Chats</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Practice with native speakers</p>
            </div>
            
            {/* Phone Mockup 2 */}
            <div style={{ textAlign: 'center', animationDelay: '0.2s' }} className="animate-slide-up">
              <div style={{
                width: '250px',
                height: '500px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '2rem',
                padding: '0.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=250&h=500&fit=crop"
                    alt="App Screen 2"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Track Progress</h3>
                    <p style={{ fontSize: '0.9rem' }}>Monitor your growth</p>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', fontFamily: "'Space Grotesk', sans-serif" }}>Progress Tracking</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>See your improvement daily</p>
            </div>
            
            {/* Phone Mockup 3 */}
            <div style={{ textAlign: 'center', animationDelay: '0.4s' }} className="animate-slide-up">
              <div style={{
                width: '250px',
                height: '500px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                borderRadius: '2rem',
                padding: '0.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=250&h=500&fit=crop"
                    alt="App Screen 3"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Learn Topics</h3>
                    <p style={{ fontSize: '0.9rem' }}>Structured lessons</p>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', fontFamily: "'Space Grotesk', sans-serif" }}>Topic-Based Learning</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Master real-world scenarios</p>
            </div>
            
            {/* Phone Mockup 4 */}
            <div style={{ textAlign: 'center', animationDelay: '0.6s' }} className="animate-slide-up">
              <div style={{
                width: '250px',
                height: '500px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '2rem',
                padding: '0.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=250&h=500&fit=crop"
                    alt="App Screen 4"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Community</h3>
                    <p style={{ fontSize: '0.9rem' }}>Connect globally</p>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', fontFamily: "'Space Grotesk', sans-serif" }}>Global Community</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Learn from everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lingowire Section */}
      <section id="features" style={{ ...styles.featuresSection, position: 'relative', overflow: 'hidden' }}>
        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '0',
          width: '400px',
          height: '400px',
          background: 'url("https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=400&fit=crop") center/cover',
          opacity: 0.05,
          borderRadius: '50%',
          zIndex: 0,
        }} className="animate-rotate" />
        
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '-100px',
          width: '300px',
          height: '300px',
          background: 'url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop") center/cover',
          opacity: 0.03,
          borderRadius: '50%',
          transform: 'rotate(45deg)',
          zIndex: 0,
        }} className="animate-float" />
        
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '20%',
          width: '200px',
          height: '200px',
          background: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop") center/cover',
          opacity: 0.04,
          borderRadius: '20px',
          transform: 'rotate(-15deg)',
          zIndex: 0,
        }} className="animate-wave" />
        
        <div style={{ ...styles.featuresContainer, position: 'relative', zIndex: 1 }}>
          <h2 style={styles.sectionTitle}>Why Choose Lingowire?</h2>
          <p style={styles.sectionSubtitle}>Learn languages the natural way</p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '0.75rem',
                      marginBottom: '1rem'
                    }}
                  />
                )}
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Topics Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Animated gradient background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, #667eea05, #764ba205, #f093fb05, #667eea05)',
          backgroundSize: '400% 400%',
          zIndex: 0,
        }} className="animate-gradient" />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={styles.sectionTitle}>Popular Learning Topics</h2>
          <p style={styles.sectionSubtitle}>Master real-world conversations</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center', position: 'relative' }} className="animate-slide-up">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=300&h=200&fit=crop" 
                  alt="Travel"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="animate-shimmer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Travel & Culture</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Navigate new places with confidence</p>
            </div>
            
            <div style={{ textAlign: 'center', position: 'relative', animationDelay: '0.1s' }} className="animate-slide-up">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop" 
                  alt="Business"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="animate-shimmer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Business & Career</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Excel in professional settings</p>
            </div>
            
            <div style={{ textAlign: 'center', position: 'relative', animationDelay: '0.2s' }} className="animate-slide-up">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop" 
                  alt="Family"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="animate-shimmer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Family & Friends</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Connect on a deeper level</p>
            </div>
            
            <div style={{ textAlign: 'center', position: 'relative', animationDelay: '0.3s' }} className="animate-slide-up">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" 
                  alt="Education"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="animate-shimmer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Academic Success</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Achieve your learning goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f9fafb', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>What Learners Say</h2>
          <p style={styles.sectionSubtitle}>Join thousands of satisfied language learners</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              position: 'relative'
            }} className="animate-slide-up">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop"
                  alt="Sarah"
                  style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem' }}
                />
                <div>
                  <h4 style={{ color: '#1f2937', fontWeight: '600', fontFamily: "'Space Grotesk', sans-serif" }}>Sarah Johnson</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Learning Spanish</p>
                </div>
              </div>
              <p style={{ color: '#4b5563', fontStyle: 'italic' }}>
                "Finally, an app that focuses on real conversations! I've made more progress in 2 months than in 2 years of traditional learning."
              </p>
              <div style={{ marginTop: '1rem', color: '#fbbf24' }}>⭐⭐⭐⭐⭐</div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              animationDelay: '0.2s'
            }} className="animate-slide-up">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
                  alt="Michael"
                  style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem' }}
                />
                <div>
                  <h4 style={{ color: '#1f2937', fontWeight: '600', fontFamily: "'Space Grotesk', sans-serif" }}>Michael Chen</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Learning French</p>
                </div>
              </div>
              <p style={{ color: '#4b5563', fontStyle: 'italic' }}>
                "The native speakers are so helpful and patient. It's like having a personal tutor available 24/7!"
              </p>
              <div style={{ marginTop: '1rem', color: '#fbbf24' }}>⭐⭐⭐⭐⭐</div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              animationDelay: '0.4s'
            }} className="animate-slide-up">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop"
                  alt="Emma"
                  style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem' }}
                />
                <div>
                  <h4 style={{ color: '#1f2937', fontWeight: '600', fontFamily: "'Space Grotesk', sans-serif" }}>Emma Rodriguez</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Learning Mandarin</p>
                </div>
              </div>
              <p style={{ color: '#4b5563', fontStyle: 'italic' }}>
                "I love that Lingowire supports less common languages. I can finally practice my heritage language!"
              </p>
              <div style={{ marginTop: '1rem', color: '#fbbf24' }}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background pattern */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, #667eea05 0%, transparent 70%)',
          zIndex: 0,
        }} className="animate-pulse-slow" />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <p style={styles.sectionSubtitle}>Start speaking in 3 simple steps</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Choose Your Language</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Select from 100+ languages</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Match with Partners</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Connect with native speakers</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>Start Conversations</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Practice and improve daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{ padding: '4rem 1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Animated background shapes */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} className="animate-float" />
        
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} className="animate-float" />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ ...styles.sectionTitle, color: 'white', WebkitTextFillColor: 'white' }}>Join Our Growing Community</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center' }} className="animate-slide-up">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>100+</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Languages Supported</p>
            </div>
            
            <div style={{ textAlign: 'center', animationDelay: '0.1s' }} className="animate-slide-up">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>50K+</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Active Learners</p>
            </div>
            
            <div style={{ textAlign: 'center', animationDelay: '0.2s' }} className="animate-slide-up">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>95%</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Satisfaction Rate</p>
            </div>
            
            <div style={{ textAlign: 'center', animationDelay: '0.3s' }} className="animate-slide-up">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>24/7</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Available Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" style={{ ...styles.formSection, backgroundColor: '#f9fafb' }}>
        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Join the Waitlist</h2>
          <p style={{ ...styles.sectionSubtitle, marginBottom: '2rem' }}>Get early access</p>
          
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
          <h2 style={styles.sectionTitle}>Become a Language Partner</h2>
          <p style={{ ...styles.sectionSubtitle, marginBottom: '2rem' }}>
            Share your language skills and earn while helping others learn.
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
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...styles.sectionTitle, fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}>
            Your Language Journey Starts Here
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Join thousands learning languages the natural way.
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
