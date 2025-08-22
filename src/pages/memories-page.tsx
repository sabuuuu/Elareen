import { useState } from 'react'
import { Plus, Camera, Heart, Download, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ImageUploader } from '@/components/ui/image-uploader'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

export function MemoriesPage() {
  const [showUploader, setShowUploader] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // Sample memories - in a real app, these would come from Supabase Storage
  const memories = [
    {
      id: 1,
      title: 'Our First Date',
      description: 'Coffee at that cute little café downtown. You were so nervous!',
      imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      date: '2025-01-10',
      tags: ['first-date', 'coffee'],
    },
    {
      id: 2,
      title: 'Beach Vacation',
      description: 'The most beautiful sunset we\'ve ever seen together.',
      imageUrl: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg',
      date: '2025-01-05',
      tags: ['vacation', 'beach', 'sunset'],
    },
    {
      id: 3,
      title: 'Cooking Together',
      description: 'First time making pasta from scratch. What a delicious mess!',
      imageUrl: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg',
      date: '2024-12-28',
      tags: ['cooking', 'pasta', 'home'],
    },
    {
      id: 4,
      title: 'Movie Night',
      description: 'Watched The Notebook and you definitely didn\'t cry...',
      imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      date: '2024-12-20',
      tags: ['movie-night', 'cozy'],
    },
    {
      id: 5,
      title: 'Christmas Morning',
      description: 'Your reaction to the surprise gift was priceless!',
      imageUrl: 'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg',
      date: '2024-12-25',
      tags: ['christmas', 'gifts', 'surprise'],
    },
    {
      id: 6,
      title: 'Ice Skating',
      description: 'You fell down 12 times but kept laughing. Love your spirit!',
      imageUrl: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
      date: '2024-12-15',
      tags: ['ice-skating', 'winter', 'fun'],
    },
  ]

  const handleUpload = (file: File) => {
    setSelectedFile(file)
  }

  const handleSaveMemory = () => {
    if (title.trim() && selectedFile) {
      // In a real app, this would upload to Supabase Storage
      console.log('Saving memory:', { title, description, file: selectedFile })
      setTitle('')
      setDescription('')
      setSelectedFile(null)
      setShowUploader(false)
    }
  }

  return (
    <div className=" mx-auto p-6 space-y-6 bg-[#DFF0D0] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#d3e6dc] flex items-center gap-2 font-cinzel">
            <Camera className="h-8 w-8 text-[#3fffa1] drop-shadow-[0_0_6px_rgba(62,255,161,0.4)]" />
            Shared Memories
          </h1>
          <p className="text-[#d3e6dc]/80 mt-1 font-inter">Capture and cherish your beautiful moments together</p>
        </div>
        <Button 
          onClick={() => setShowUploader(!showUploader)}
          className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Memory
        </Button>
      </div>

      {/* Memory Upload Form */}
      {showUploader && (
        <Card className="p-6 bg-[#121c16] border border-[#1e2a22] rounded-2xl">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#d3e6dc] font-cinzel">Add a New Memory</h3>
            
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[#d3e6dc] font-inter">Memory Title</Label>
              <Input
                id="title"
                placeholder="What made this moment special?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:border-[#3fffa1] focus:ring-[#3fffa1]/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#d3e6dc] font-inter">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell the story behind this memory..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:border-[#3fffa1] focus:ring-[#3fffa1]/50"
              />
            </div>
            
            <ImageUploader onUpload={handleUpload} />
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleSaveMemory}
                disabled={!title.trim() || !selectedFile}
                className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
              >
                Save Memory
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowUploader(false)}
                className="border-[#3fffa1] text-[#3fffa1] hover:bg-[#121c16] hover:text-[#3fffa1] hover:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Memories Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <Card 
            key={memory.id} 
            className="overflow-hidden bg-[#121c16] border border-[#1e2a22] rounded-2xl hover:shadow-[0_0_15px_rgba(62,255,161,0.2)] transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-1">
                  <Button 
                    size="sm" 
                    className="h-8 w-8 p-0 bg-[#121c16] border border-[#3fffa1] text-[#3fffa1] hover:bg-[#3fffa1]/10 hover:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    className="h-8 w-8 p-0 bg-[#121c16] border border-[#e6c96b] text-[#e6c96b] hover:bg-[#e6c96b]/10 hover:shadow-[0_0_6px_rgba(230,201,107,0.3)]"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                <Badge className="bg-[#0b0f0c]/80 text-[#d3e6dc] border border-[#1e2a22] font-inter">
                  {new Date(memory.date).toLocaleDateString()}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-[#d3e6dc] font-cinzel">
                {memory.title}
                <Heart className="h-4 w-4 text-[#e6c96b] fill-current drop-shadow-[0_0_4px_rgba(230,201,107,0.5)]" />
              </h3>
              <p className="text-[#d3e6dc]/80 text-sm mb-3 line-clamp-2 font-inter">
                {memory.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {memory.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    className="text-xs bg-[#0b0f0c] text-[#d3e6dc] border border-[#1e2a22] hover:bg-[#1e2a22] font-inter"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {memories.length === 0 && (
        <Card className="bg-[#121c16] border border-[#1e2a22] rounded-2xl">
          <CardContent className="text-center py-12">
            <Camera className="h-12 w-12 text-[#3fffa1]/50 mx-auto mb-4 drop-shadow-[0_0_6px_rgba(62,255,161,0.2)]" />
            <h3 className="text-lg font-medium text-[#d3e6dc] mb-2 font-cinzel">No memories yet</h3>
            <p className="text-[#d3e6dc]/80 mb-4 font-inter">Start capturing your beautiful moments together.</p>
            <Button 
              onClick={() => setShowUploader(true)}
              className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            >
              Add Your First Memory
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}