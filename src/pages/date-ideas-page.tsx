import { useState } from 'react'
import { Plus, Heart, MapPin, Star, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function DateIdeasPage() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [filter, setFilter] = useState('all')

  const dateIdeas = [
    {
      id: 1,
      title: 'Moonlit Forest Walk',
      description: 'Explore the enchanted woods under the full moon with fairy lanterns',
      type: 'outdoor',
      location: 'Ancient Oak Forest',
      votes: 12,
      favorite: true,
      tags: ['magical', 'nature', 'romantic'],
      difficulty: 'easy',
    },
    {
      id: 2,
      title: 'Alchemy Potion Making',
      description: 'Create mystical elixirs with rare herbs and crystals',
      type: 'indoor',
      location: 'Apothecary Cottage',
      votes: 8,
      favorite: false,
      tags: ['creative', 'mystical', 'crafts'],
      difficulty: 'medium',
    },
    {
      id: 3,
      title: 'Stargazing Ritual',
      description: 'Read fortunes in the celestial patterns with ancient star charts',
      type: 'outdoor',
      location: 'Celestial Plateau',
      votes: 15,
      favorite: true,
      tags: ['spiritual', 'cosmic', 'night'],
      difficulty: 'easy',
    },
    {
      id: 4,
      title: 'Rune Carving Workshop',
      description: 'Learn the ancient art of binding magic into sacred symbols',
      type: 'indoor',
      location: 'Artisan Hall',
      votes: 6,
      favorite: false,
      tags: ['educational', 'crafts', 'magic'],
      difficulty: 'hard',
    },
    {
      id: 5,
      title: 'Fey Picnic',
      description: 'Share enchanted treats in a hidden glen with woodland creatures',
      type: 'outdoor',
      location: 'Whispering Glade',
      votes: 10,
      favorite: true,
      tags: ['whimsical', 'nature', 'food'],
      difficulty: 'easy',
    },
    {
      id: 6,
      title: 'Crystal Ball Reading',
      description: 'Peer into the mists of time and divine your shared destiny',
      type: 'indoor',
      location: 'Seer\'s Tower',
      votes: 7,
      favorite: false,
      tags: ['mystical', 'spiritual', 'cozy'],
      difficulty: 'medium',
    },
  ]

  const filteredIdeas = dateIdeas.filter(idea => {
    if (filter === 'all') return true
    if (filter === 'favorites') return idea.favorite
    return idea.type === filter
  })

  const handleSubmit = () => {
    if (title.trim() && description.trim() && type) {
      console.log('New date idea:', { title, description, type, location })
      setTitle('')
      setDescription('')
      setType('')
      setLocation('')
      setShowForm(false)
    }
  }

  const handleVote = (id: number) => {
    console.log('Voting for idea:', id)
  }

  const toggleFavorite = (id: number) => {
    console.log('Toggling favorite for idea:', id)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-[#3fffa1]/20 text-[#3fffa1] border-[#3fffa1]/40'
      case 'medium':
        return 'bg-[#e6c96b]/20 text-[#e6c96b] border-[#e6c96b]/40'
      case 'hard':
        return 'bg-[#ff6b6b]/20 text-[#ff6b6b] border-[#ff6b6b]/40'
      default:
        return 'bg-[#121c16] text-[#d3e6dc] border-[#121c16]'
    }
  }

  return (
    <div className=" mx-auto p-6 space-y-6 bg-[#0b0f0c] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#d3e6dc] flex items-center gap-2 font-cinzel">
            <Calendar className="h-8 w-8 text-[#3fffa1] drop-shadow-[0_0_6px_rgba(62,255,161,0.4)]" />
            Enchanted Dates
          </h1>
          <p className="text-[#d3e6dc]/80 mt-1 font-inter">Plan mystical encounters and magical adventures together</p>
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)] transition-all"
        >
          <Plus className="h-4 w-4 mr-2" />
          Conjure Idea
        </Button>
      </div>

      {/* Add Date Idea Form */}
      {showForm && (
        <Card className="bg-[#121c16] border-[#1e2a22]">
          <CardHeader>
            <CardTitle className="text-[#d3e6dc] font-cinzel">Weave a New Enchantment</CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 font-inter">
              What mystical experience shall you share next?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#d3e6dc] font-inter">Enchantment Title</Label>
                <Input
                  id="title"
                  placeholder="Name your mystical experience"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type" className="text-[#d3e6dc] font-inter">Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc]">
                    <SelectValue placeholder="Select realm" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#121c16] border-[#1e2a22] text-[#d3e6dc]">
                    <SelectItem value="indoor" className="hover:bg-[#1e2a22]">Sanctum (Indoor)</SelectItem>
                    <SelectItem value="outdoor" className="hover:bg-[#1e2a22]">Wilds (Outdoor)</SelectItem>
                    <SelectItem value="virtual" className="hover:bg-[#1e2a22]">Astral (Virtual)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="text-[#d3e6dc] font-inter">Sacred Site</Label>
              <Input
                id="location"
                placeholder="Where does the magic happen?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#d3e6dc] font-inter">Incantation</Label>
              <Textarea
                id="description"
                placeholder="Describe the mystical experience..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleSubmit}
                className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)] transition-all"
              >
                Cast Spell
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowForm(false)}
                className="border-[#1e2a22] text-[#d3e6dc] hover:bg-[#1e2a22] hover:text-[#3fffa1]"
              >
                Banish
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={setFilter} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-[#121c16] border border-[#1e2a22]">
          <TabsTrigger 
            value="all" 
            className="text-[#d3e6dc] data-[state=active]:bg-[#1e2a22] data-[state=active]:text-[#3fffa1] data-[state=active]:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
          >
            All Spells
          </TabsTrigger>
          <TabsTrigger 
            value="favorites" 
            className="text-[#d3e6dc] data-[state=active]:bg-[#1e2a22] data-[state=active]:text-[#e6c96b] data-[state=active]:shadow-[0_0_6px_rgba(230,201,107,0.3)]"
          >
            <Star className="h-4 w-4 mr-1 fill-[#e6c96b]/40" />
            Favorites
          </TabsTrigger>
          <TabsTrigger 
            value="indoor" 
            className="text-[#d3e6dc] data-[state=active]:bg-[#1e2a22] data-[state=active]:text-[#3fffa1] data-[state=active]:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
          >
            Sanctum
          </TabsTrigger>
          <TabsTrigger 
            value="outdoor" 
            className="text-[#d3e6dc] data-[state=active]:bg-[#1e2a22] data-[state=active]:text-[#3fffa1] data-[state=active]:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
          >
            Wilds
          </TabsTrigger>
          <TabsTrigger 
            value="virtual" 
            className="text-[#d3e6dc] data-[state=active]:bg-[#1e2a22] data-[state=active]:text-[#3fffa1] data-[state=active]:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
          >
            Astral
          </TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea) => (
              <Card 
                key={idea.id} 
                className="bg-[#121c16] border-[#1e2a22] hover:shadow-[0_0_12px_rgba(62,255,161,0.2)] transition-all group hover:translate-y-[-2px]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2 text-[#d3e6dc] font-cinzel">
                        {idea.title}
                        {idea.favorite && (
                          <Star className="h-4 w-4 text-[#e6c96b] fill-current drop-shadow-[0_0_4px_rgba(230,201,107,0.5)]" />
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1 text-[#d3e6dc]/70">
                        <MapPin className="h-3 w-3 text-[#3fffa1]" />
                        {idea.location}
                      </CardDescription>
                    </div>
                    <Badge className={`${getDifficultyColor(idea.difficulty)} font-inter`}>
                      {idea.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d3e6dc]/90 mb-4 font-inter">{idea.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {idea.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc]/80 hover:text-[#3fffa1] font-inter"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleVote(idea.id)}
                        className="flex items-center gap-1 bg-[#121c16] border-[#1e2a22] text-[#d3e6dc] hover:bg-[#1e2a22] hover:text-[#3fffa1] hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                      >
                        <Heart className="h-3 w-3 text-[#ff6b6b]" />
                        {idea.votes}
                      </Button>
                      <Button
                        size="sm"
                        variant={idea.favorite ? "default" : "outline"}
                        onClick={() => toggleFavorite(idea.id)}
                        className={`${idea.favorite ? 'bg-[#e6c96b] text-[#0b0f0c] hover:bg-[#e6c96b]/90 hover:shadow-[0_0_6px_rgba(230,201,107,0.3)]' : 'bg-[#121c16] border-[#1e2a22] text-[#d3e6dc] hover:bg-[#1e2a22] hover:text-[#e6c96b]'}`}
                      >
                        <Star className={`h-3 w-3 ${idea.favorite ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <Badge variant="secondary" className="capitalize bg-[#1e2a22] text-[#3fffa1] border-[#3fffa1]/30 font-inter">
                      {idea.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredIdeas.length === 0 && (
        <Card className="bg-[#121c16] border-[#1e2a22]">
          <CardContent className="text-center py-12">
            <Calendar className="h-12 w-12 text-[#3fffa1]/40 mx-auto mb-4 drop-shadow-[0_0_6px_rgba(62,255,161,0.2)]" />
            <h3 className="text-lg font-medium text-[#d3e6dc] mb-2 font-cinzel">No enchantments woven yet</h3>
            <p className="text-[#d3e6dc]/70 mb-4 font-inter">Begin crafting your mystical experiences together.</p>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            >
              Weave Your First Spell
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}